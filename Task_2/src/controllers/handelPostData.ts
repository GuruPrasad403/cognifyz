
import { Request,Response,NextFunction } from "express";
import { formSchema,FormData  } from "../utils/formData.validate";

const local_user :FormData []= []
export function handelPostData(req: Request, res: Response, next: NextFunction)  {
    try {
        const validateUserInput = formSchema.safeParse(req.body);
        console.log(req.body)
        if (!validateUserInput.success) {
            const errorObj = {
                name: "",
                date: "",
                password: "",
                country: "",
                email: ""
            };

            for (const err of validateUserInput.error.errors) {
                const field = err.path[0];
                if (typeof field === "string" && field in errorObj) {
                    errorObj[field as keyof typeof errorObj] = err.message;
                }
            }

            return res.render("form", {
                error:errorObj
            })
        }
        local_user.push(validateUserInput.data)
        res.status(200).render("sucess", {
           users : local_user
        });

    } catch (error) {
        console.error(error);
        next(error);
    }
}
