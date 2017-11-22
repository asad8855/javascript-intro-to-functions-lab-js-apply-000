function shout(string) {
  return "hello".toUpperCase()
}

function whisper(string) {
  return "hello".toLowerCase()
}

function logShout(string) {
  console.log("hello".toUpperCase())
}

function logWhisper(string) {
  console.log("hello".toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "HELLO!"
  var lowercase = "hello!"
  
}
/*
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
/*