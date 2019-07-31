import React, { useEffect, useState } from "react";
import axios from "axios";

export function Image() {
  return (
    <>
      <img src='https://cdn.mos.cms.futurecdn.net/yHenHqtMKYqEno7k6HCEif-602-80.jpg' alt="space picture"></img>
    </>
  );
}

export function Info() {
  return (
    <>
      <h1>Space!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo tempus quam quis feugiat. Sed sit amet libero vitae arcu venenatis egestas. Quisque varius vestibulum sapien eu dictum. Suspendisse rhoncus, massa auctor porta commodo, neque felis varius massa, id pellentesque sem neque a urna. Nullam aliquam auctor ipsum, at facilisis.</p>
    </>
  );
}


