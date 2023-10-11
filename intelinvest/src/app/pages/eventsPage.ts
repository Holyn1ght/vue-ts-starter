import { Component, UI } from "@intelinvest/platform/src/app/ui";

@Component({
  // language=Vue
  template: `
    <v-container fluid class="selectable">
      <v-data-table
        :headers="headers"
        :items="events"
        class="elevation-1"
        :items-per-page="10"
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

  async created(): Promise<void> {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    const response = await fetch("http://localhost:3004/events", params);
    this.events = await response.json();
  }
}
