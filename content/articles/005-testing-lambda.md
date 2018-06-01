# AWS Lambdas & Testing

```
node -e 'require("./handler").email({body : ""}, {}, () => {})'
```

```
SMTP_HOST=smtp.ethereal.email SENDER_NAME=Test SENDER_EMAIL=test@test.com node -e 'require("./handler").email({body : ""}, {}, () => {})'
```
