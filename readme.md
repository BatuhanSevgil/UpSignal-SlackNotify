## ENGLISH

# UpSignal-SlackNotify

## Setup
- First, create a Slack channel (e.g., api-alert, alert).
- Obtain your Slack bot token following the instructions in this video: https://www.youtube.com/watch?v=z9PD7-UXSbA

- Permissions needed for the bot:
  - chat:write
  - channels:write
  - chat:write.public

  If you do not want to deal with permissions, you can add the admin.

- Update the relevant fields in the .env file (SLACK_CHANNEL_NAME, SLACK_BOT_TOKEN)
- Update the CRON_SCHEDULE in the .env file to set the bot's working time. Default: */15 * * * * => every 15 minutes.
- Add your Slack bot to the channel you created.

## Settings
- Settings in the template form are given in track-list.json, you can update these settings.

- notifyOnErrorOnly: set it to true if you want to send notifications only in case of an error.
- If you are going to change a setting, you don't need to restart the application, just update directly from track-list.json, it will be added to the list at the next check.

- Be sure to add an Id for each new setting you add.

## Running the bot
```sh
npm install
npm run start
```

## Docker
Image Build
```sh
docker build -t upsignal-slack .
```
Container Run
```sh
docker run -p 3000:3000 -d upsignal-slack
```

---

## TÜRKÇE

# UpSignal-SlackNotify

## Kurulum
- Öncelikle bir slack kanalı oluşturun (örnek: api-alert, alert).
- Slack bot token'ınızı bu videoyu izleyerek alın: https://www.youtube.com/watch?v=z9PD7-UXSbA

- Bot için gerekli izinler:
  - chat:write
  - channels:write
  - chat:write.public

  Eğer izinlerle uğraşmak istemiyorsanız, admin'i ekleyebilirsiniz.

- .env dosyasındaki ilgili alanları güncelleyin (SLACK_CHANNEL_NAME, SLACK_BOT_TOKEN)
- Botun çalışma zamanını ayarlamak için .env dosyasındaki CRON_SCHEDULE'ı güncelleyin. Varsayılan: */15 * * * * => her 15 dakikada bir kontrol eder.
- Oluşturmuş olduğunuz kanala slack botunuzu ekleyin.

## Ayarlar
- track-list.json dosyasında şablon halinde ayarlar verilmiştir, bu ayarları güncelleyebilirsiniz.

- notifyOnErrorOnly: sadece hata durumunda bildirim göndermek istiyorsanız bu ayarı true olarak belirleyin.
- Bir ayarı değiştirecekseniz, uygulamayı yeniden başlatmanıza gerek yok, doğrudan track-list.json dosyasından güncelleme yapın, bir sonraki kontrolde listeye eklenecektir.

- Ekleyeceğiniz her yeni ayar için mutlaka bir Id eklemelisiniz.

## Botun Başlatılması
```sh
npm install
npm run start
```

## Docker
Image Oluşturma
```sh
docker build -t upsignal-slack .
```
Container Çalıştırma
```sh
docker run -p 3000:3000 -d upsignal-slack
```