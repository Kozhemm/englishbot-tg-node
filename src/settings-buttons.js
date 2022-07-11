module.exports = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Получить следующие глаголы', callback_data: 1 }],
            [{ text: 'Предыдущий уровень', callback_data: 2 }],
            [{ text: '(!) Установить уровень', callback_data: 3 }],
            [{ text: 'Сбросить до первого', callback_data: 4 }]
        ]
    })
};
