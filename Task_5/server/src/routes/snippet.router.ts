import express, { type Router, Request, Response, NextFunction } from "express";
import auth from "../middleware/auth.middleware";
import {
  snippetAdd,
  snippetDelete,
  snippetGetAll,
  snippetUpdate,
} from "../controllers/snippet.controllers";

const snippet: Router = express.Router();

snippet.get("/", auth, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      message: "This is the Snippet Backend",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

snippet.post(
  "/add-snippet",
  auth,
  // @ts-ignore
  snippetAdd,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const snippet = (req as any).snippet;
      const userData = (req as any).userData;
      res.status(200).json({
        message: "Snippet Updated ",
        snippet,
        userData,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);
export default snippet;

// snippet update

snippet.put(
  "/update",
  auth,
  // @ts-ignore
  snippetUpdate,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const snippet = (req as any).updateSnippet;
      res.status(200).json({
        message: "Snippet Updated ",
        snippet,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// snippet get
snippet.get(
  "/update",
  auth,
  // @ts-ignore
  snippetGetAll,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const snippet = (req as any).allSnippet;
      const userData = (req as any).userData;
      res.status(200).json({
        message: "Snippet Updated ",
        snippet,
        userData,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// snippet delete

snippet.delete(
  "/delete",
  //@ts-ignore
  snippetDelete,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const snippet = (req as any).deltedSnippet;
      res.status(200).json({
        message: "Snippet Updated ",
        snippet,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);
