FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app/api
COPY /crocki_clothing/requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000