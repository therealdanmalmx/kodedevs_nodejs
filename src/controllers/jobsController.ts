import type { Request, Response, NextFunction } from "express";
import { showValidationErrors } from "../utilities/validations/validation-utilities";
import prisma from "../db/db.server";

const getAllJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const jobList = await prisma.jobs.findMany();

    if (!jobList.length) {
      res.status(404).json({ message: "No jobs found" });
    }
    res.status(200).json(jobList);
  } catch (error: any) {
    next(error);
  }
};

const getSingleJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: string = req.params.id;

  try {
    const singleJob = await prisma.jobs.findUnique({
      where: {
        id,
      },
    });

    if (!singleJob) {
      res.status(404).json(`Job with id: ${id} could not be found`);
    }

    res.status(200).json(singleJob);
  } catch (error: any) {
    next(error);
  }
};

const createJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (showValidationErrors(req, res)) {
    return;
  }
  try {
    const {
      title,
      description,
      qualification,
      responsibilities,
      location,
      company_name,
      company_website,
      company_tagline,
      company_logo,
    } = req.body;
    const newJob = await prisma.jobs.create({
      data: {
        title,
        description,
        qualification,
        responsibilities,
        location,
        company_name,
        company_website,
        company_tagline,
        company_logo,
      },
    });
    res.status(201).json(newJob);
  } catch (error: any) {
    next(error);
  }
};

const updateJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (showValidationErrors(req, res)) {
    return;
  }
  const id: string = req.params.id;
  try {
    const job = await prisma.jobs.findUnique({
      where: {
        id,
      },
    });

    if (!job) {
      res.status(404).json({ message: "Job not found" });
    }
    const {
      title,
      description,
      qualification,
      responsibilities,
      location,
      company_name,
      company_website,
      company_tagline,
      company_logo,
    } = req.body;

    if (
      !title ||
      !description ||
      !qualification ||
      !responsibilities ||
      !location ||
      !company_name ||
      !company_website ||
      !company_tagline ||
      !company_logo
    ) {
      res.sendStatus(400);
    }
    const updatedJob = await prisma.jobs.update({
      where: {
        id: job?.id,
      },
      data: {
        title,
        description,
        qualification,
        responsibilities,
        location,
        company_name,
        company_website,
        company_tagline,
        company_logo,
      },
    });
    res.status(200).json(updatedJob);
  } catch (error: any) {
    next(error);
  }
};

const deleteJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: string = req.params.id;

  try {
    await prisma.jobs.delete({
      where: {
        id,
      },
    });
    res.status(204).json({ message: "Job deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};

export { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
