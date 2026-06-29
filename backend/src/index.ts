import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const clients = new Map(); // id -> websocket

function generateId() {
  let id;

  do {
    id = Math.floor(100000 + Math.random() * 900000).toString();
  } while (clients.has(id));

  return id;
}

wss.on("connection", (ws) => {
  const id = generateId();

  clients.set(id, ws);

  console.log(`${id} connected`);

  ws.send(
    JSON.stringify({
      type: "id",
      id,
    }),
  );

  ws.on("message", (message) => {
    let data;

    try {
      data = JSON.parse(message.toString());
    } catch {
      return;
    }

    if (!data.to) return;

    const target = clients.get(data.to);

    if (!target) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "Peer not found",
        }),
      );

      return;
    }

    target.send(
      JSON.stringify({
        ...data,
        from: id,
      }),
    );
  });

  ws.on("close", () => {
    clients.delete(id);

    console.log(`${id} disconnected`);
  });
});
