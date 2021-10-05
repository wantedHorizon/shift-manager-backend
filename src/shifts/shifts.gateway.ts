import { Logger } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {  } from './shifts.service';

@WebSocketGateway({ namespace: '/update' })
export class ShiftsGateway {
  @WebSocketServer() wss: Server;

  afterInit(server: Server) {
    Logger.log('topography socket', 'Initialized');
  }

  handleConnection(client: Socket) {
    Logger.log('topography socket', `Client Connected: ${client.id}`);
    // const topographyState = getTopographyState();
    // this.completeUpdate(topographyState);
  }
  handleDisconnection(client: Socket) {
    Logger.log('topography socket', `Client Disconnected: ${client.id}`);
  }

  completeUpdate() {
    Logger.log('table changed', 'complete update');
    if (this.wss) {
      this.wss.emit('completeUpdate', { type: 'completeUpdate' });
    }
  }

  // partialUpdate(data: number[]) {
  //   Logger.log('topography socket', 'partial update');
  //   if (this.wss && data)
  //     this.wss.emit('partialUpdate', { type: 'partialUpdate', data });
  // }
}
