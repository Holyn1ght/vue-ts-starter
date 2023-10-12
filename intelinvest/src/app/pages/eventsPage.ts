import { Component, UI } from "@intelinvest/platform/src/app/ui";

@Component({
  // language=Vue
  template: `
    <v-container fluid class="selectable">
      <v-data-table
        v-model="selectedEvents"
        class="elevation-1"
        :headers="headers"
        :items="events"
        :items-per-page="10"
        item-key="id"
        show-select
      >
        <template v-slot:item.date="{ item }">{{ item.date }}</template>
        <template v-slot:item.totalAmount="{ item }">{{
          item.totalAmount
        }}</template>
        <template v-slot:item.quantity="{ item }">{{ item.quantity }}</template>
        <template v-slot:item.label="{ item }">{{ item.label }}</template>
        <template v-slot:item.comment="{ item }">{{ item.comment }}</template>
        <template v-slot:item.period="{ item }">{{ item.period }}</template>
      </v-data-table>
      <v-btn @click="updateSummary">Показать выбранные</v-btn>
      <p>{{ summary }}</p>
    </v-container>
  `,
})
export class EventsPage extends UI {
  private events: any = [];
  private headers = [
    { text: "Дата", value: "date" },
    { text: "Сумма", value: "totalAmount" },
    { text: "Количество", value: "quantity" },
    { text: "Название", value: "label" },
    { text: "Комментарий", value: "comment" },
    { text: "Период", value: "period" },
  ];
  private selectedEvents: any[] = [];
  private summary: string = "";

  // Обновить строку summary при нажатии на кнопку
  updateSummary(): void {
    this.summary = this.calculateSelectedTotals();
  }

  /**
   * Вычисляет сумму выбранных событий по полю totalAmount для каждого типа события.
   *
   * @returns {string} Строка, содержащая сумму для каждого типа события.
   */
  calculateSelectedTotals(): string {
    //  Объект для хранения итоговых сумм для каждого типа события
    const totals: { [key: string]: number } = {};

    // Проходим по каждому выбранному событию
    this.selectedEvents.forEach((event) => {
      // Если для текущего типа события еще нет значения в объекте totals, инициализируем его нулем
      if (!totals[event.type]) {
        totals[event.type] = 0;
      }
      // Добавляем значение totalAmount к текущему типу события, преобразовав его в число
      totals[event.type] += parseFloat(event.totalAmount.replace("USD ", ""));
    });

    // Преобразуем объект totals в строку, где каждая пара ключ-значение преобразуется в "тип: сумма"
    return Object.entries(totals)
      .map(([type, total]) => `${type}: USD ${total.toFixed(2)}`)
      .join(", ");
  }

  async created(): Promise<void> {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    const response = await fetch("http://localhost:3004/events", params);
    const eventsData = await response.json();

    // Добавление уникального идентификатора для каждого элемента
    this.events = eventsData.map((event: any, index: number) => ({
      id: index,
      ...event,
    }));
  }
}
