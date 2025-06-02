import { type Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "../lib/prisma";
import { devSnippetSchema } from "../validations/snippet.validation";

export const snippetAdd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validate = devSnippetSchema.safeParse(req?.body);
    if (!validate.success)
      return res.status(400).json({
        message: "Invalid Inputs",
        error: validate.error.errors,
        data: req.body,
      });
    const email = (req as any).email;
    const userData = await prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!userData?.id || !userData)
      return res.status(200).json({
        message: "No user Id and User Found",
      });
    const snippet = await prisma.devSnippet.create({
      data: {
        userId: userData?.id,
        content: validate.data.content,
        tags: validate?.data?.tags,
        code: validate?.data?.code,
        description: validate?.data.code,
      },
    });
    ((req as any).snippet = snippet), ((req as any).userData = userData);
    next();
  } catch (error) {
    console.log(error);
  }
};
// to get the all the snippets.

export const snippetGetAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = (req as any).email;
    const userData = await prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!userData?.id || !userData)
      return res.status(200).json({
        message: "No user Id and User Found",
      });
    const allSnippet = await prisma.devSnippet.findMany({
      where: {
        userId: userData?.id,
      },
    });
    if (!allSnippet) {
      return res.status(200).json({
        message: "No snippet to display",
        allSnippet,
      });
    }
    (req as any).allSnippet = allSnippet;
    (req as any).userData = userData;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// update the snippet

export const snippetUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validate = devSnippetSchema.safeParse(req?.body);
    if (!validate.success)
      return res.status(400).json({
        message: "Invalid Inputs",
        error: validate.error.errors,
        data: req.body,
      });
    const id = parseInt(req.body?.id);
    const updateSnippet = await prisma.devSnippet.update({
      data: {
        content: validate.data.content,
        tags: validate?.data?.tags,
        code: validate?.data?.code,
        description: validate?.data.code,
      },
      where: {
        id: id,
      },
    });
    (req as any).updateSnippet =  updateSnippet;
    next()
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// delete the snippet 
export const snippetDelete = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.body.id;
        const deltedSnippet = await prisma.devSnippet.delete({
            where:{
                id
            }
        });
        if(!deltedSnippet) return res.status(400).json({
            message : "Faild to delte the Snippet",
            deltedSnippet
        });
        (req as any ).deltedSnippet = deltedSnippet;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}