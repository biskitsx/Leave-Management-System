# build stage
FROM golang:1.19-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main main.go
EXPOSE 8000
CMD [ "/app/main" ]
