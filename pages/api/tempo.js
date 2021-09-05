async function tempo(request,response) {
    const secret = process.env.TOKEN;
    const dynamicDate = new Date();

    //API
    response.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString()
    });

}

export default tempo;