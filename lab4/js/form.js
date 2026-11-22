class Feedback
{
    constructor(name, email, artist, source, news)
    {
        this.name = name;
        this.email = email;
        this.artist = artist;
        this.source = source;
        this.news = news;
    }

    display() {
    const sources = {
        friend: "От друга",
        soundcloud: "SoundCloud",
        vk: "Рекомендация в ВК",
        telegram: "Реклама в Telegram",
        tiktok: "TikTok-рекомендация",
        portal: "SoundCloud-аккаунт портала",
        browser: "Выдача браузера",
        other: "Другое"
    };

    console.log(
        `Обратная связь\n` +
        `Имя: ${this.name}\n` +
        `Почта: ${this.email}\n` +
        `Исполнитель: ${this.artist}\n` +
        `Источник: ${sources[this.source]}\n` +
        `Согласие на рассылку: ${this.news ? "да" : "нет"}`
    );
}
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const feedback = new Feedback(form.elements.name.value, form.elements.email.value,
        form.elements.artist.value, form.elements.source.value, form.elements.news.checked);

    feedback.display();
});