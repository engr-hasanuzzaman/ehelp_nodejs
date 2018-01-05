# check get -> /posts method
echo 'testing get /posts method'
curl http://localhost:3001/posts -H "Content-Type: application/json"
sleep 2
echo 'testing get /posts/:postId method'
curl http://localhost:3001/posts/0 -H "Content-Type: application/json"
