import { createGame } from "@asimov-ts/core";

createGame()
  // Add your entities here
  // .withBuildable(new Player())
  // ...

  // Add your systems here
  // .withSystem(new InputSystem())
  // ...

  .build()
  .initialize();
