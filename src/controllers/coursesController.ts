import { Request, Response } from "express";
import { Course } from "../models/Course.js";
import { courseService } from "../services/courseService.js";
import { AuthenticatedRequest } from "../middlewares/auth.js";

export const coursesController = {
    //GET /courses
  index: async (req: Request, res: Response) => {
    try {
      const courses = await Course.findAll({
        attributes: ["id", "name", "synopsis", "thumbnailUrl"],
        order: [["id", "ASC"]],
      });
      return res.json(courses);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //GET /courses/:id
  show: async (req: AuthenticatedRequest, res: Response) => {
    const courseId = req.params.id;

    try {
      const course = await courseService.findByIdWithEpisodes(courseId);
      if (!course) {
        return res.status(404).json({ messege: "Curso não encontrado" });
      }
      return res.json({ ...course.get()});
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message });
          }
    }
  }
};
