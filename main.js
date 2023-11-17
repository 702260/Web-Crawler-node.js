function main() {
    if(process.argv.length<3){
        console.log("no website provided")
        process.exit(1)
    }
     
    for(const arg of process.argv) {
        console.log(arg)
    }
    console.log("starting crawl")
}

main()
  