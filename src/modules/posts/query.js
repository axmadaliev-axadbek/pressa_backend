const GETALL = `
SELECT 
*,
to_char(p.date_at,'dd/MM/yyyy') as date_at,
to_char(p.time, 'HH24:MI') as time,
floor(random()*(5000-10+1))+10 as view
from posts as p
where p.date_at >= current_date and p.status='confirmed' and case
                            when $1 > 0 then p.posts_id = $1
                            else true
                            end
                            ORDER  BY p.date_at 
                                                      
`

const getPendingPosts = `
SELECT 
*,
to_char(p.date_at,'dd/MM/yyyy') as date_at,
to_char(p.time, 'HH24:MI') as time,
floor(random()*(5000-10+1))+10 as view
from posts as p
where  p.status='pending' and case
                            when $1 > 0 then p.posts_id = $1
                            else true
                            end
`

  const getCanceledPosts = `
  SELECT 
  *,
  to_char(p.date_at,'dd/MM/yyyy') as date_at,
  to_char(p.time, 'HH24:MI') as time,
  floor(random()*(5000-10+1))+10 as view
  from posts as p
  where  p.status='canceled' and case
                              when $1 > 0 then p.posts_id = $1
                              else true
                              end
    `
  

const ADDPOST = `
INSERT INTO posts (speaker, shaxs, job, phone, phone2, categories, subCategory, type, place, postTitle, postDesc,  date_at, time, images) VALUES
 ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
 returning *
`


const CANCELPOST = `
    update posts set status = 'canceled' where posts.posts_id = $1  returning *
`
const CONFIRMPOST = `
    update posts set status = 'confirmed' where posts.posts_id = $1  returning *
`
module.exports = {
    GETALL, ADDPOST, CANCELPOST, CONFIRMPOST, getPendingPosts, getCanceledPosts
}


// select * from posts where username like '%ar%';