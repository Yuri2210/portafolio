# Usa una imagen base de Python
FROM python:3.11-slim

#Establece el directorio de trabajo
WORKDIR /app

#Copia el resto de la aplicacion
COPY requeriments.txt requeriments.txt

#Instala las dependencias
RUN pip install --no-cache-dir -r requeriments.txt

COPY . .


#Expone el puerto en el que corre la app


ENV FLASK_APP=holamundoflask.py

ENV FLASK_RUN_HOST=0.0.0.0

EXPOSE 5000

#Comando para ejecutar la aplicacion
CMD ["flask", "run"]