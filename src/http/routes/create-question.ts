import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createQuestionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      const { question } = request.body;
      const { roomId } = request.params;

      const result = await db
        .insert(schema.questions)
        .values({
          roomId,
          question,
        })
        .returning();

      const insertedQuestion = result[0];

      if (!insertedQuestion) {
        throw new Error("Failled to create new question.");
      }

      return reply.status(201).send({ questionId: insertedQuestion.id });
    },
  );
};
