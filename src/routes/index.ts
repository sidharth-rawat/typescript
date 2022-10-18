import { Router } from "express";
import { studentRouter } from "./student.router";

export const allRoutes: Record<string, Router> = {
    'student' : studentRouter,
}
