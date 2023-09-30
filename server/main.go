package main

import (
	"fmt"
	"strings"

	"github.com/biskitsx/Leave-Management-System/config"
	"github.com/biskitsx/Leave-Management-System/repository"
	"github.com/biskitsx/Leave-Management-System/router"
	"github.com/gofiber/fiber/v2"
	"github.com/spf13/viper"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	initConfig()
	app := initServer()
	db := initDatabase()
	router.Init(app, db)

	app.Listen(":3000")
}

func initServer() *fiber.App {
	app := fiber.New(fiber.Config{
		ErrorHandler: config.NewCustomConfigFiber,
	})
	return app
}

func initConfig() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".")
	// config ค่าผ่าน cli
	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	err := viper.ReadInConfig()
	if err != nil {
		panic(err)
	}
}

func initDatabase() *gorm.DB {
	dsn := fmt.Sprintf("host=%v user=%v password=%v dbname=%v port=%v TimeZone=Asia/Bangkok",
		viper.GetString("db.host"),
		viper.GetString("db.username"),
		viper.GetString("db.password"),
		viper.GetString("db.database"),
		viper.GetString("db.port"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	db.AutoMigrate(&repository.User{}, &repository.Leave{})
	if err != nil {
		panic(err)
	}
	return db
}
