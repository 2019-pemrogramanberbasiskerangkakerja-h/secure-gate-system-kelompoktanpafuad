## SECURE GATE SYSTEM (RESTFUL API EXPRESS JS)

### Test
- Use POSTMAN
- Use Curl

### List API

#### Auth API

- POST /login
    > curl -d "nrp=[nrp]&password=[password]&gates=[gates]" -X POST http://localhost:3000/login

#### Users API

- GET /users
    > curl http://localhost:3000/users
- POST /users
    > curl -d "nrp=[nrp]&password[password]" -X POST http://localhost:3000/users
- GET users/:user_id
    > curl http://localhost:3000/users/[id_user]
- PUT users/:user_id
    > curl -d "nrp=[nrp]&password[password]" -X POST http://localhost:3000/users/[id_user]
- DELETE users/:user_id
    > curl -X DELETE http://localhost:3000/users/[id_user]

#### Gates API

- GET /gates
    > curl http://localhost:3000/gates
- POST /gates
    > curl -d "gate_name=[gate_name]" -X POST http://localhost:3000/gates
- GET gates/:gate_id
    > curl http://localhost:3000/gates/[id_user]
- PUT gates/:gate_id
    > curl -d "gate_name=[gate_name]" -X POST http://localhost:3000/gates/[id_user]
- DELETE gates/:gate_id
    > curl -X DELETE http://localhost:3000/gates/[id_user]

#### Rules API

- GET /rules
    > curl http://localhost:3000/rules
- POST /rules
    > curl -d "rule_name=[rule_name]&start=[tiemstart]&finish=[timefinish]&user_id=[user_id]&gate_id=[gate_id]" -X POST http://localhost:3000/rules
- GET rules/:rule_id
    > curl http://localhost:3000/rules/[id_user]
- PUT rules/:rule_id
    > curl -d "rule_name=[rule_name]&start=[tiemstart]&finish=[timefinish]&user_id=[user_id]&gate_id=[gate_id]" -X POST http://localhost:3000/rules/[id_user]
- DELETE rules/:rule_id
    > curl -X DELETE http://localhost:3000/rules/[id_user]
    
