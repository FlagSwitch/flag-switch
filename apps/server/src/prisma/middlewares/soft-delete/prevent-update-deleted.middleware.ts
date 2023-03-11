import { PrismaClient } from "@prisma/client"


export default (prisma: PrismaClient) => {
    prisma.$use(async (params, next) => {      
        if (params.action == 'update') {
            params.action = 'updateMany'
            params.args.where['deletedAt'] = null;
          }
          if (params.action == 'updateMany') {
            if (params.args.where != undefined) {
              params.args.where['deletedAt'] = null
            } else {
              params.args['where'] = { deletedAt: null }
            }
          }
        return next(params);
        
    })
};

  