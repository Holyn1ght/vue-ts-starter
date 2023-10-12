import { Component, UI } from "@intelinvest/platform/src/app/ui";

@Component({
  // language=Vue
  template: `
    <v-container>
      <v-card>
        <v-card-title>Детали события</v-card-title>
        <v-card-text>
          <div v-if="event">
            <div><strong>Дата:</strong> {{ event.date }}</div>
            <div><strong>Сумма:</strong> {{ event.totalAmount }}</div>
            <div><strong>Количество:</strong> {{ event.quantity }}</div>
            <div><strong>Название:</strong> {{ event.label }}</div>
            <div><strong>Комментарий:</strong> {{ event.comment }}</div>
            <div><strong>Период:</strong> {{ event.period }}</div>
            <div><strong>Тип:</strong> {{ event.type }}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  `,
})
export class EventDetail extends UI {
  event: any = null;

  // При монтировании компонента получаем данные события
  async created() {
    const eventIndex = parseInt(this.$route.params.index); // Получаем индекс события из URL
    
    const response = await fetch("http://localhost:3004/events");
    const data = await response.json();
    this.event = data[eventIndex]; // Получаем событие по его индексу из db.json
  }
}
