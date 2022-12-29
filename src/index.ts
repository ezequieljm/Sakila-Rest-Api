import app from "./app/app";
import { PORT } from "./config";

app.listen(PORT, function (): void {
    console.log(`Server on port ${PORT}`);
});
