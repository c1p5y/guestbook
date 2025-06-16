## Getting Started

1. Start docker postgres DB 

```docker run  --name guestbook -p 5432:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=9hOxCkHbPFapmOtB -e POSTGRES_DB=guestbook -d postgres```

2. Create the schema in the DB 

```npx prisma migrate dev```

3. Start the application

```npm run dev```
