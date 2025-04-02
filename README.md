# Pavlova Flota (Co prawda testowa)

Ostatni commit, który zdążyłem zrobić w ciągu 3 godzin, to Add branch cards to UI (5dfc569). Wszystko po tym mnie interesuje w kontekście dokończenia zadania.

Link to repo at that point: https://github.com/qMaDMaNp/gig-economy-testcase/tree/5dfc5697cb850c15c0210045c7a7f776a7db7aa3

`client` - React client folder;
`server` - Laravel server folder;
`doc` - Ten folder zawiera początkowe entities i pomysły na modele związane z zadaniem.

# Jak uruchomić projekt? (server) 

### For first time only!
- `cd server`
- `docker compose up -d --build`
- `docker compose exec php bash`
- `composer setup`

### From the second time onwards
- `docker compose up -d`

# Jak uruchomić projekt? (client)
- `cd client`
- `npm i` (node v22+)
- `npm run dev`


### Laravel App
- URL: http://localhost

### Frontend App
- URL: http://localhost:5173 (default vite port)


# Server Template
Template source: https://github.com/refactorian/laravel-docker

# Client Template (vite-react template)
Template source: https://vite.dev/guide/#trying-vite-online