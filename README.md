# Goku - Pangmalakasan ang bira!

# System Design
![image](https://github.com/kylehipz/goku/assets/31435847/1255e98d-a985-4a90-ac30-ad62310921cd)

# Database Design
![image](https://github.com/kylehipz/goku/assets/31435847/ee6f4640-521a-47ac-8e87-d7ed8b479aa0)


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
