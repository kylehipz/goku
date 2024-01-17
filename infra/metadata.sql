CREATE TABLE video_metadata (
  id BIGSERIAL PRIMARY KEY,
  owner BIGINT NOT NULL,
  title VARCHAR(30) NOT NULL,
  descripition VARCHAR(100) NOT NULL,
  url VARCHAR NOT NULL,
  tag VARCHAR(100),
  upload_date TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (owner) REFERENCES users(id)
)

