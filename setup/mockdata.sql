SELECT * from users;
INSERT into users(username, password, avatar) VALUES
('salim',  crypt('55', gen_salt('bf')), 'http://picsum.photos/400'),
('asl',  crypt('5994', gen_salt('bf')), 'http://picsum.photos/400'),
('bobir',  crypt('111', gen_salt('bf')), 'http://picsum.photos/400');



SELECT * from posts;
select *, to_char(date_at, 'DD/MM/YYYY') as DATE_ORG from posts;
INSERT INTO posts (speaker,shaxs,job,phone,phone2, categories,subCategory,type,place,postTitle,postDesc,images) VALUES

 ('Ali Aliev', 'Jismoniy shaxs', 'Dasturchi', '+998931234567', '998931234567', 'Dasturclash',
  'Backend Node js', 'offline', 'Najot Talim', 'Intervuedan otish sirlari', 'Dasrulash bu ...','http://picsum.photos/500');

  INSERT INTO posts (speaker,shaxs,job,phone,phone2, categories,subCategory,type,place,postTitle,postDesc,images, date_at) VALUES

 ('Lee leee', 'Yuridik shaxs', 'Dizayn', '+998931234567', '998931234567', 'Dasturclash',
  'Backend Node js', 'offline', 'Najot Talim', 'Roadmap To Nodejs', 'Dasrulash bu ...','http://picsum.photos/500', '2020-01-05');