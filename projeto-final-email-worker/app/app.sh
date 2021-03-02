#!/bin/sh
# arquivo shell usado na inicialização

# Instala servidor e a dependência de acesso ao postgres e redis
pip install bottle==0.12.13 psycopg2==2.7.3.2 redis==2.10.5
# Chama aplicativo python
python -u sender.py