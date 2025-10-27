import axios from "axios";
import { useState } from "react";

export function Button({ label, action, id, data, className }) {

    return (
        <button className={className} type="submit" onClick={action}>{label}</button>

    )
}