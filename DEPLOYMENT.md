# Deployment Guide

## Development

```bash
# Local
npm install
npm run dev

# Docker
docker compose -f docker-compose.dev.yml up --build
```

## Production with Traefik

```bash
# Deploy
docker compose -f docker-compose.prod.yml up -d --build

# Check logs
docker compose -f docker-compose.prod.yml logs -f
```

Update domain in `docker-compose.prod.yml`:
```yaml
labels:
  - "traefik.http.routers.mhannani-resume.rule=Host(`your-domain.com`)"
```

## Health Check

```bash
curl http://localhost:3000/api/health
```

## Troubleshooting

### Port conflict
Change port in docker-compose:
```yaml
ports:
  - "3001:3000"
```

### Rebuild
```bash
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d --build --force-recreate
```
