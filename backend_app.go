package main

import (
	"crypto/rand"
	"database/sql"
	"encoding/base64"
	"net/http"
	"sort"
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

//使用Go web框架 Gin 實作題目功能

func main() {
	router := gin.Default()

	// GET method /hello
	router.GET("/hello", func(c *gin.Context) {
		c.String(200, "Hello World")
	})

	// POST method /sortnum
	router.POST("/sortnum", func(c *gin.Context) {
		var nums []int
		//解析 JSON 格式，如解析錯誤回傳 400 error
		err := c.BindJSON(&nums)
		if err != nil {
			c.AbortWithError(400, err)
			return
		}

		//使用內建庫作升序處理
		sort.Ints(nums)
		c.JSON(200, nums)
	})

	// 假設使用mysql，連結db查詢
	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/mydb")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	// 初始化Session
	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("mysession", store))

	// 使用Middleware 驗證access token
	router.Use(func(c *gin.Context) {
		session := sessions.Default(c)
		// 取得 session 中的 Access Token 的過期時間
		expireTime := session.Get("expire_time")
		// 如果為空，或是現在時間已經超過expireTime則回傳錯誤訊息
		if expireTime == nil || time.Now().Unix() > expireTime.(int64) {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Access token 無效或過期"})
			c.Abort()
			return
		}
		c.Next()
	})

	// login API
	router.POST("/login", func(c *gin.Context) {

		// 查詢使用者是否存在且密碼正確
		query := "SELECT * FROM admin_acc WHERE name='admin' AND password='Admin&8181'"
		rows, err := db.Query(query)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "伺服器錯誤"})
			return
		}
		defer rows.Close()

		if !rows.Next() {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "認證失敗"})
			return
		}

		// 建立access token
		token := generateToken()

		// 將token存放在session中，設定過期時間
		session := sessions.Default(c)
		session.Set("access_token", token)
		session.Set("expire_time", time.Now().Add(30*time.Minute).Unix())
		session.Save()

		c.JSON(http.StatusOK, gin.H{"token": token})
	})

	// is_auth 確認Admin是否登入
	router.GET("/is_auth", func(c *gin.Context) {
		session := sessions.Default(c)
		if session.Get("access_token") == nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "使用者未通過授權"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "使用者已授權"})
	})

	router.Run(":8080")
}

//簡易Token產生器(未加密)
func generateToken() string {

	b := make([]byte, 16)
	rand.Read(b)

	return base64.URLEncoding.EncodeToString(b)
}
