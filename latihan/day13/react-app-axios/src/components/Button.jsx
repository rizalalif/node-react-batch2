import axios from "axios";
import { useState } from "react";

export function Button({ label, action, id, data }) {

    return (
        <button type="submit" onClick={action}>{label}</button>

    )
}