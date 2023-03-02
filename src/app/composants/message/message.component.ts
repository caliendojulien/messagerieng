import {Component, Input} from '@angular/core';
import {Message} from "../../modeles/Message";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() public message!: Message;

}
