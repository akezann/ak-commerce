package main

import (
	"fmt"
	"net/http"
	"log"
    "os"
    "github.com/joho/godotenv"
	// "time"
    // "github.com/dgrijalva/jwt-go"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello world!")
}

func helloAbout(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello About!")
}

func helloServices(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Services!")
}

func main() {

	http.HandleFunc("/", helloWorld)
	http.HandleFunc("/about", helloAbout)
	http.HandleFunc("/services", helloServices)

	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file, %s ", err)
	}

	secret_key := os.Getenv("SECRET_JWT_KEY")
	if secret_key == "" {
		log.Fatalf("SECRET_JWT_KEY is not set in .env file");
	}

	fmt.Println("SECRET_JWT_KEY : ", secret_key);

	fmt.Println("server opening on port 8000");

	http.ListenAndServe(":8000", nil)


}