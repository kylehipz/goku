# Goku - Pangmalakasan ang bira!

# System Design
![image](https://github.com/kylehipz/goku/assets/31435847/a76d08cf-db16-43ae-afe2-5a87a8e58018)

# Technologies Used
* Frontend
  * AngularJS
* Backend
  * NodeJS
  * NestJS
  * Golang
  * Postgres
* Infra
  * AWS
    * S3
    * Aurora
    * EC2 + ECS
  * Terraform

# Service Composition
## Home Feed Service
  Fetches all videos uploaded by the user
  Tech choices: NodeJS, NestJS, Postgres
## Upload Service
  Handles the uploading of the videos to S3 and saving the metadata to the database
  Tech choices: NodeJS, NestJS, Postgres, S3
## Video Streaming Service
  Handles the streaming of videos to different users
  Tech choices: Golang, Postgres
## Search Service
  Handles the filtering of videos based on a search query
  Tech choices: Golang, Postgres
