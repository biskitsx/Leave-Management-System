package repository

import (
	"time"

	"gorm.io/gorm"
)

type Leave struct {
	gorm.Model
	TimeStart time.Time
	TimeEnd   time.Time
	Type      string
	Detail    string
	UserID    uint
}
