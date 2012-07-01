contents = File.open('/Users/sathish/Downloads/mate_in_one.pgn').read
fens = contents.scan(/FEN \"(.*?)\s/).map(&:first)
event = contents.scan(/Event "(.*?)"/).map(&:first)
white = contents.scan(/White "(.*?)"/).map(&:first)
black = contents.scan(/Black "(.*?)"/).map(&:first)
solution = contents.scan(/\.\s+(.*?)\#.*/).map(&:first)
fens.each_with_index do |fen, i|
  instruction = white[i].size > 1 ? white[i] : black[i].size > 1 ? black[i] : event[i]
  # puts "#{fen},#{instruction},#{solution[i]}"
  puts "%tr"
  puts "  %td"
  puts "    #{fen}"
  puts "  %td"
  puts "    #{instruction}"
  puts "  %td"
  puts "    #{solution[i]}"
end