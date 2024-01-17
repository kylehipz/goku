CREATE TABLE search (
  id BIGSERIAL PRIMARY KEY,
  word VARCHAR(100) NOT NULL,
  metadata_id BIGINT NOT NULL,
  FOREIGN KEY (metadata_id) REFERENCES metadata(id)
);