import { Routes } from '@angular/router';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/chat', pathMatch: 'full' },
    {path: 'chat', component : ChatRoomComponent}
];
