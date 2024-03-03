import { Hono } from "hono";
const app = new Hono();
// GET
app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text(`Blog route with ${id}`);
});
app.get("/api/v1/blog/bulk", (c) => {
  return c.text(`Blog bulk`);
});

// POST
app.post("/api/v1/user/signup", (c) => {
  return c.text(`Signup route`);
});
app.post("/api/v1/user/signin", (c) => {
  return c.text(`Signin route`);
});
// PUT
app.post("/api/v1/blog", (c) => {
  return c.text(`Edit blog`);
});
// DELETE

export default app;
