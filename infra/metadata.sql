CREATE TABLE video_metadata (
  id BIGSERIAL PRIMARY KEY,
  owner BIGINT NOT NULL,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  url VARCHAR NOT NULL,
  tag VARCHAR(100),
  upload_date TIMESTAMP DEFAULT NOW()
);

INSERT INTO video_metadata (owner, title, description, url, tag) VALUES
  (1, 'Inclined Dumbbell Press for dummies', 'Dont be dumb and do this shit', 'https://google.com', 'chest'),
  (2, 'Bench Press', 'Shut up and do this shit', 'https://google.com', 'chest'),
  (1, 'Pec Fly', 'Dont be dumb and do this shit', 'https://google.com', 'delts'),
  (2, 'Leg Press', 'Dont be dumb and do this shit', 'https://google.com', 'quads'),
  (1, 'Lateral Raises', 'Dont be dumb and do this shit', 'https://google.com', 'shoulders');
