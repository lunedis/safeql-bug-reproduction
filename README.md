# ts-safeql bug reproduction

## How to reproduce

1) Start database:
```
docker compose up -d
```

2) run eslint
```
npx eslint .
```

3) See error that should not be there.