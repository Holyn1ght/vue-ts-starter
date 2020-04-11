import {Component, Prop, UI} from "../app/ui";

@Component({
    // language=Vue
    template: `
        <div class="update-service-dialog__content">
            <div>
                <p>
                    Мы рады сообщить, что сервис учета инвестиций Intelinvest <br/>
                    стал еще удобнее, быстрее и появились новые возможности.
                </p>

                <div class="update-service-dialog__date">29.03.2020</div>
                <ul>
                    <li>Изменили в лучшую сторону расчеты средней цены бумаги. <br/>
                        Теперь в таблице Акции по умолчанию отображается<br/>
                        средняя цена открытой позиции, если вы активно торговали, <br/>
                        то среднюю цену по закрытым позициям можно будет посмотреть отдельно, <br/>
                        отобразив соответствующую колонку таблицы.
                    </li>
                    <li>Улучшили и исправили импорт
                        <ul>
                            <li>добавили поддержку внебиржевых сделок для отчетов Тинькофф</li>
                            <li>добавили поддержку репо сделок для отчета Сбербанк</li>
                            <li>добавили распознавание остатков для Открытия</li>
                            <li>добавили распознавание остатков для БКС</li>
                            <li>Церих</li>
                            <li>Interactive Brokers</li>
                            <li>IT capital</li>
                        </ul>
                    </li>
                    <li>Добавили экспорт составного портфеля в xlsx</li>
                    <li>Улучшили поиск бумаги в диалоге создания сделки. <br/>
                        Теперь поиск бумаги универсальный по умолчанию и ищет по всем бумагам в системе.
                    </li>
                    <li>Исправили расчет доходности по дивидендам в Инструментах</li>
                    <li>Обновили историю цен по бумагам в фунтах</li>
                    <li>Добавили зарубежные акции, о которых вы просили</li>
                    <li>Исправили отображение ПИФов Альфа-Капитал</li>

                </ul>

                <template v-if="isLogin">
                    <expanded-panel :value="oldUpdatesPanelState" class="promo-codes__statistics">
                        <template #header>Предыдущие обновления</template>
                        <div class="update-service-dialog__date">23.02.2020</div>
                        <ul>
                            <li>Улучшили импорт Сбербанка.<br/>
                                Теперь поддерживаются отчеты из личного кабинета: отчеты по сделками и отчеты по денежным средствам. <br/>
                                Просто сформируйте отчеты в личном кабинете за необходимый вам период и импортируйте отчеты на сервисе. <br/>
                                Все события по бумагам (дивиденды, купоны, амортизация и погашения, будут импортированы из отчета)<br/>
                                Загрузите всего два отчета и вся история по портфелю будет в сервисе.
                            </li>
                            <li>Улучшили и исправили импорт для Тинькофф, АльфаДирект, АльфаКапитал, Атон, Уралсиб</li>
                            <li>Реализовали систему алиасов, которая позволит вам загружать отчеты проще.<br/>
                                Если мы не смогли распознать бумагу из отчета, просто укажите ее название в системе и мы импортируем ее.
                            </li>
                            <li>Добавили на странице Портфель диаграмму распределения облигаций по типу (ОФЗ, муниципальные, региональные, корпоративные и т.д)</li>
                            <li>Добавили фильтрацию таблицы Облигации, по типу, теперь вы легко сможете найти и отфильтровать нужную вам бумагу.</li>
                            <li>Добавили поддержку новой валюты: фунта стерлингов и бонусом добавили все бумаги из индекса <b>FTSE100</b>
                                (если вам понадобятся еще бумаги, торгующиеся на Лондонской бирже, напишите нам и мы их незамедлительно добавим)
                            </li>
                            <li>Переработали темную тему, теперь она шикарная, мы даже подумываем сделать ее темой по умолчанию 😎</li>
                            <li>Добавили поддержку дробных лотов для акций</li>
                            <li>Добавили учет дивидендов по произвольным активам (теперь попадают в раздел Дивиденды)</li>
                            <li>Исправили расчет бумаг для событий по облигациям (Особенно когда в один день погашение и выплата купона)</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">01.02.2020</div>
                        <ul>
                            <li>Добавили диаграмму эффективности бумаг в портфеле (Раздел Аналитика)</li>
                            <li>Обновили события по облигациям</li>
                            <li>Улучшили импорт Тинькофф (теперь поддерживается импорт всех сделок из отчета, включая начисления)</li>
                            <li>Сделали учет дробного количества дивидендов</li>
                            <li>Отображение времени сделки для Дивидендов (при условии Профессионального режима)</li>
                            <li>Добавили в Профиль кнопку подтверждения почты</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">12.01.2020</div>
                        <ul>
                            <li>Отображение и быстрая подстановка текущего остатка при Выводе средств</li>
                            <li>Дополнили историю цен по всем ПИФам, теперь внесение сделок будет еще удобнее</li>
                            <li>Добавили еще около 1500 зарубежных тикеров</li>
                            <li>Улучшили и исправили импорт Тинькофф</li>
                            <li>Улучшили и исправили импорт ВТБ</li>
                            <li>Улучшили и исправили импорт БКС</li>
                            <li>Исправили график стоимости (учет произвольных активов)</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">30.12.2019</div>
                        <p>
                            Это больше техническое обновление для устранения недочетов.<br/>
                            Последнее в 2019 году.<br/>
                        </p>
                        <ul>
                            <li>Исправлено редактирование сделки с НКД меньше 0,01</li>
                            <li>Исправлен расчет итого по сделки облигации при слишком малом НКД</li>
                            <li>Исправлено округление и валюта в таблице Облигации при валюте отличной от рубля</li>
                            <li>Улучшили и исправили импорт по Сбербанк</li>
                            <li>Починили сбрасывание операции при выборе бумаги в диалоге добавления сделки</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">30.11.2019</div>
                        <ul>
                            <li>Добавили возможность учета дробного количества активов</li>
                            <li>Улучшили отображение таблиц</li>
                            <li>Улучшили и исправили импорт по QUIK</li>
                            <li>Улучшили и исправили импорт ВТБ</li>
                            <li>Улучшили и исправили импорт Фридом Финанс</li>
                            <li>Улучшили и исправили импорт Interactive Brokers</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">16.11.2019</div>
                        <ul>
                            <li>
                                Добавили возможность учитывать произвольные активы! А также:
                                <ul>
                                    <li>Фьючерсы ММВБ</li>
                                    <li>Криптовалюты</li>
                                    <li>ПИФы</li>
                                    <li>Драгметаллы</li>
                                    <li>И еще много других активов</li>
                                </ul>
                            </li>
                            <li>Улучшили и исправили импорт по Сбербанку</li>
                            <li>Улучшили и исправили импорт Тинькофф</li>
                            <li>Улучшили и исправили импорт БКС</li>
                            <li>Добавили возможность учета дробного количества активов</li>
                            <li>Улучшили отображение таблиц</li>
                            <li>Улучшили и исправили импорт по QUIK</li>
                            <li>Улучшили и исправили импорт ВТБ</li>
                            <li>Улучшили и исправили импорт Фридом Финанс</li>
                            <li>Улучшили и исправили импорт Interactive Brokers</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">14.09.2019</div>
                        <ul>
                            <li>Вернули рейтинги акций. Можно смотреть и выставлять на страницах Котировки и Информации по акции</li>
                            <li>Улучшили и исправили импорт по Сбербанку</li>
                            <li>Добавили новый формат отчетов Тинькофф</li>
                            <li>Добавили отображение сделок на графике стоимости конкретной бумаги (Акции)</li>
                            <li>Обновили инструкцию по Финаму</li>
                            <li>Сохранение сортировки таблиц</li>
                            <li>Автоматическое обновление приложения до новых версий</li>
                            <li>Добавили в меню уведомления о новых событиях</li>
                            <li>Сохранение уведомления об обновлениях сервиса</li>
                            <li>Мелкие исправления и доработки, о которых Вы нам сообщали</li>
                        </ul>

                        <div class="update-service-dialog__date">27.08.2019</div>
                        <ul>
                            <li>
                                Улучшили стилизацию дашборда.
                            </li>
                            <li>Улучшили поиск по бумагам (от одного символа для Акций, точное вхождение по тикеру всегда первым результатом в списке).</li>
                            <li>Вернули раздел Аналитика.
                                <ul>
                                    <li>рекомендации по портфелю</li>
                                    <li>графики сравнения доходности портфеля с бенчмарками (индекс ММВБ, инфляция, депозит)</li>
                                </ul>
                            </li>
                            <li>
                                Улучшили график стоимости
                                <ul>
                                    <li>дополнительное разделение на графики Акции, Облигации</li>
                                    <li>графики по Денежным средствам и Внесениям/Списаниям</li>
                                </ul>
                            </li>
                            <li>Добавили восстановление пароля с начальной страницы.</li>
                            <li>Добавили фильтрацию сделок по датам.</li>
                            <li>Добавили автоскрытие меню в мобильной версии при переходах между разделами.</li>
                            <li>Исправили фильтрацию сделок.</li>
                            <li>Актуализировали инструкцию по получению отчетов для Тинькофф.</li>
                            <li>
                                Еще много мелких и не очень исправлений и улучшений, о которых вы сообщали нам.
                            </li>
                        </ul>
                    </expanded-panel>
                </template>
            </div>
            <div class="app-btns">
                <a href="https://itunes.apple.com/ru/app/intelinvest-%D1%83%D1%87%D0%B5%D1%82-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B9
                /id1422478197?mt=8" title="Загрузите приложение в App Store" target="_blank">
                    <img src="./img/help/app-store-badge2.svg" alt="pic">
                </a>
                <a href="https://play.google.com/store/apps/details?id=ru.intelinvest.portfolio" title="Загрузите приложение в Google Play" target="_blank">
                    <img src="./img/help/google-play-badge2.svg" alt="pic">
                </a>
            </div>
            <div>
                <div v-if="isLogin">
                    Желаем вам доходных инвестиций, команда Intelinvest.<br/>
                    Все вопросы и предложения, через форму
                    <a @click="openFeedBackDialog">обратной связи.</a><br/><br/>
                </div>
                Почитать обо всех обновлениях сервиса более подробно вы можете на нашем блоге
                <a href="http://blog.intelinvest.ru/" target="_blank" class="decorationNone">blog.intelinvest.ru</a><br/>
                Оперативно получить поддержку можно через
                <a href="https://tlgg.ru/intelinvestSupportBot" title="Задайте вопрос в Telegram" target="_blank">telegram</a>,
                наши специалисты с радостью вам ответят и помогут.<br/>
                Также вы можете присоединиться к общению с нами и пользователями сервиса в
                <a href="https://t.me/intelinvest_chat" title="Чат в Telegram" target="_blank">чате telegram</a><br/>
                Подписывайтесь на обновления в группе <a href="https://vk.com/intelinvest" target="_blank" class="decorationNone">VK</a>
                или <a href="https://www.facebook.com/intelinvest.ru/" target="_blank" class="decorationNone">facebook</a>
            </div>
        </div>
    `
})
export class UpdateServiceInfo extends UI {

    @Prop({default: false, type: Boolean})
    private isLogin: boolean;

    private oldUpdatesPanelState = [0];

    private openFeedBackDialog(): void {
        this.$emit("openFeedBackDialog");
    }
}
